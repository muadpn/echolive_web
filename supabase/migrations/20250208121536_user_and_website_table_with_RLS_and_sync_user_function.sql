create table "public"."users" (
    "id" uuid not null default gen_random_uuid(),
    "email" character varying(255) not null,
    "name" character varying(255) not null,
    "status" character varying(50) not null,
    "createdAt" timestamp with time zone not null default now()
);


alter table "public"."users" enable row level security;

create table "public"."website_details" (
    "id" uuid not null default gen_random_uuid(),
    "userId" uuid not null,
    "accessLevel" character varying(50) not null,
    "domain" character varying(255) not null,
    "appName" character varying(255) not null,
    "status" character varying(50) not null,
    "role" character varying(50) not null,
    "createdAt" timestamp with time zone not null default now()
);


alter table "public"."website_details" enable row level security;

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

CREATE UNIQUE INDEX website_details_pkey ON public.website_details USING btree (id);

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "public"."website_details" add constraint "website_details_pkey" PRIMARY KEY using index "website_details_pkey";

alter table "public"."users" add constraint "users_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) not valid;

alter table "public"."users" validate constraint "users_id_fkey";

alter table "public"."website_details" add constraint "website_details_userId_fkey" FOREIGN KEY ("userId") REFERENCES users(id) not valid;

alter table "public"."website_details" validate constraint "website_details_userId_fkey";

set check_function_bodies = off;


create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.users (id)
  values (new.id);
  return new;
end;
$$;


grant delete on table "public"."users" to "anon";

grant insert on table "public"."users" to "anon";

grant references on table "public"."users" to "anon";

grant select on table "public"."users" to "anon";

grant trigger on table "public"."users" to "anon";

grant truncate on table "public"."users" to "anon";

grant update on table "public"."users" to "anon";

grant delete on table "public"."users" to "authenticated";

grant insert on table "public"."users" to "authenticated";

grant references on table "public"."users" to "authenticated";

grant select on table "public"."users" to "authenticated";

grant trigger on table "public"."users" to "authenticated";

grant truncate on table "public"."users" to "authenticated";

grant update on table "public"."users" to "authenticated";

grant delete on table "public"."users" to "service_role";

grant insert on table "public"."users" to "service_role";

grant references on table "public"."users" to "service_role";

grant select on table "public"."users" to "service_role";

grant trigger on table "public"."users" to "service_role";

grant truncate on table "public"."users" to "service_role";

grant update on table "public"."users" to "service_role";

grant delete on table "public"."website_details" to "anon";

grant insert on table "public"."website_details" to "anon";

grant references on table "public"."website_details" to "anon";

grant select on table "public"."website_details" to "anon";

grant trigger on table "public"."website_details" to "anon";

grant truncate on table "public"."website_details" to "anon";

grant update on table "public"."website_details" to "anon";

grant delete on table "public"."website_details" to "authenticated";

grant insert on table "public"."website_details" to "authenticated";

grant references on table "public"."website_details" to "authenticated";

grant select on table "public"."website_details" to "authenticated";

grant trigger on table "public"."website_details" to "authenticated";

grant truncate on table "public"."website_details" to "authenticated";

grant update on table "public"."website_details" to "authenticated";

grant delete on table "public"."website_details" to "service_role";

grant insert on table "public"."website_details" to "service_role";

grant references on table "public"."website_details" to "service_role";

grant select on table "public"."website_details" to "service_role";

grant trigger on table "public"."website_details" to "service_role";

grant truncate on table "public"."website_details" to "service_role";

grant update on table "public"."website_details" to "service_role";

create policy "Enable read access for all users"
on "public"."users"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "public"."website_details"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."website_details"
as permissive
for select
to authenticated
using (true);



