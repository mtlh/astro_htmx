export default function isValidEmail(email: FormDataEntryValue | null): boolean {
    // Regular expression for a simple email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
    // Test the input string against the regex
    return emailRegex.test(email?.toString()!);
}