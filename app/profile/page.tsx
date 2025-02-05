import FormContainer from "@/components/form/FormContainer";
import { updateProfileAction, fetchProfile } from "@/utils/actions";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";

async function ProfilePage() {
  const profile = await fetchProfile();

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
      <div className="border p-8 rounded-md">
        {/* image input container */}

        <FormContainer action={updateProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              type="text"
              label="First Name"
              placeholder="John"
              required
              defaultValue={profile?.firstName}
            />
            <FormInput
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Doe"
              required
              defaultValue={profile?.lastName}
            />
            <FormInput
              name="username"
              type="text"
              label="Username"
              placeholder=""
              required
              defaultValue={profile?.username}
            />
          </div>
          <SubmitButton text="Update Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default ProfilePage;
