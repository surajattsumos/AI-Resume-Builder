import { zodResolver } from "@hookform/resolvers/zod";
import { summarySchema, SummaryValues } from "@/lib/validation";
import { EditorFormProps } from "@/lib/type";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export default function SummaryForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<SummaryValues>({
    resolver: zodResolver(summarySchema),
    defaultValues: {
      summary: resumeData.summary || "",
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();
      if (!isValid) return; // Update resume data
      setResumeData({ ...resumeData, ...values });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-bold">Summary</h2>
        <p className="text-sm text-muted-foreground">
          Add a summary to your resume.
        </p>
      </div>
      <FormProvider {...form}>
        <form className="space-y-3">
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Summary</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormDescription>
                  Describe your skills and experiences in a few sentences.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </FormProvider>
    </div>
  );
}
