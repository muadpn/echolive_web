alter table "public"."users" alter column "email" drop not null;

alter table "public"."users" alter column "name" drop not null;

alter table "public"."users" alter column "status" drop not null;

create policy "Enable insert for authenticated users only"
on "public"."users"
as permissive
for insert
to authenticated
with check (true);



