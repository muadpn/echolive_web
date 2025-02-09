create table "public"."Identifier" (
    "id" uuid not null default gen_random_uuid(),
    "website_details_id" uuid not null,
    "domain_api_key" character varying not null,
    "status" text,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."Identifier" enable row level security;

CREATE UNIQUE INDEX "Identifier_domain_api_key_key" ON public."Identifier" USING btree (domain_api_key);

CREATE UNIQUE INDEX "Identifier_pkey" ON public."Identifier" USING btree (id);

alter table "public"."Identifier" add constraint "Identifier_pkey" PRIMARY KEY using index "Identifier_pkey";

alter table "public"."Identifier" add constraint "Identifier_domain_api_key_key" UNIQUE using index "Identifier_domain_api_key_key";

alter table "public"."Identifier" add constraint "Identifier_website_details_id_fkey" FOREIGN KEY (website_details_id) REFERENCES website_details(id) not valid;

alter table "public"."Identifier" validate constraint "Identifier_website_details_id_fkey";

grant delete on table "public"."Identifier" to "anon";

grant insert on table "public"."Identifier" to "anon";

grant references on table "public"."Identifier" to "anon";

grant select on table "public"."Identifier" to "anon";

grant trigger on table "public"."Identifier" to "anon";

grant truncate on table "public"."Identifier" to "anon";

grant update on table "public"."Identifier" to "anon";

grant delete on table "public"."Identifier" to "authenticated";

grant insert on table "public"."Identifier" to "authenticated";

grant references on table "public"."Identifier" to "authenticated";

grant select on table "public"."Identifier" to "authenticated";

grant trigger on table "public"."Identifier" to "authenticated";

grant truncate on table "public"."Identifier" to "authenticated";

grant update on table "public"."Identifier" to "authenticated";

grant delete on table "public"."Identifier" to "service_role";

grant insert on table "public"."Identifier" to "service_role";

grant references on table "public"."Identifier" to "service_role";

grant select on table "public"."Identifier" to "service_role";

grant trigger on table "public"."Identifier" to "service_role";

grant truncate on table "public"."Identifier" to "service_role";

grant update on table "public"."Identifier" to "service_role";

create policy "Enable insert for authenticated users only"
on "public"."Identifier"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."Identifier"
as permissive
for select
to public
using (true);



