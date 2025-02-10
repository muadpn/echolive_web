alter table "public"."users" alter column "status" set data type text using "status"::text;

alter table "public"."website_details" alter column "accessLevel" set data type text using "accessLevel"::text;

alter table "public"."website_details" alter column "role" set data type text using "role"::text;

alter table "public"."website_details" alter column "status" set data type text using "status"::text;


