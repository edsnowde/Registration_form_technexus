
//Make an API endpoint to receive form submissions

import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Minimal validation (add more as desired)
    const required = [
      "full_name","email","phone","city_state","linkedin_url",
      "role","motivation","commit_all_sessions","understands_no_recordings",
      "will_complete_tasks","sponsor_reimburse","needs_financial_assistance",
      "voucher_non_transferable","respects_participants","not_share_materials",
      "accepts_no_job_guarantee","final_declaration"
    ];
    for (const key of required) {
      if (body[key] === undefined || body[key] === "") {
        return NextResponse.json({ ok:false, error:`Missing field: ${key}` }, { status: 400 });
      }
    }

    // Map booleans (incoming strings like "Yes"/"No" -> boolean)
    const yn = (v: any) => (typeof v === "string" ? v === "Yes" : !!v);

    const payload = {
      full_name: body.full_name,
      email: body.email.toLowerCase(),
      phone: body.phone,
      city_state: body.city_state,
      linkedin_url: body.linkedin_url,

      role: body.role,
      degree_name: body.degree_name ?? null,
      branch: body.branch ?? null,
      study_year: body.study_year ?? null,
      company_name: body.company_name ?? null,
      company_role: body.company_role ?? null,

      motivation: body.motivation,

      ms_cert_attempted: yn(body.ms_cert_attempted),
      ms_cert_details: body.ms_cert_details ?? null,

      cloud_exposure: yn(body.cloud_exposure),
      cloud_experience: body.cloud_experience ?? null,

      commit_all_sessions: yn(body.commit_all_sessions),
      understands_no_recordings: yn(body.understands_no_recordings),
      will_complete_tasks: yn(body.will_complete_tasks),
      sponsor_reimburse: yn(body.sponsor_reimburse),
      needs_financial_assistance: yn(body.needs_financial_assistance),
      voucher_non_transferable: yn(body.voucher_non_transferable),

      respects_participants: yn(body.respects_participants),
      not_share_materials: yn(body.not_share_materials),
      accepts_no_job_guarantee: yn(body.accepts_no_job_guarantee),

      referral: body.referral ?? null,
      final_declaration: yn(body.final_declaration),
    };

    const { data, error } = await supabaseAdmin
      .from("registrations")
      .insert([payload])
      .select("id")
      .single();

    if (error) {
      // Handle unique email constraint (Postgres code 23505)
      const msg = (error as any)?.code === "23505"
        ? "This email is already registered."
        : error.message;
      return NextResponse.json({ ok:false, error: msg }, { status: 400 });
    }

    return NextResponse.json({ ok:true, id: data.id }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ ok:false, error: e?.message ?? "Unknown error" }, { status: 500 });
  }
}
