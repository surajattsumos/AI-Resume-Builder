import PersonalInfoForm from "./forms/PersonalInfoForm";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import { EditorFormProps } from "@/lib/type";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General Info", component: GeneralInfoForm, key: "general-info" },

  { title: "Personal Info", component: PersonalInfoForm, key: "personal-info" },
];
