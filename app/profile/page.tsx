import FormContainer from "@/components/form/FormContainer";
import { updateProfileAction, fetchProfile } from "@/utils/actions";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";

async function ProfilePage() {
  const profile = await fetchProfile();

  return <div>ProfilePage</div>;
}

export default ProfilePage;
