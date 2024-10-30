import { phone } from "phone";
import { z } from "zod";

export const emailSchema = z.string().email();

export const phoneValid = (number: string) => phone("+91" + number);
export const isStrongPassword = (
  password: string
): { valid: boolean; message: string } => {
  // Define your criteria for a strong password
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Check if the password meets the criteria
  const valid = strongPasswordRegex.test(password);

  // Initialize error message
  let message = "";

  // Check if each required element is missing and update the error message accordingly
  if (!/(?=.*[a-z])/.test(password)) {
    message += "Lowercase letters,";
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    message += " Uppercase letters,";
  }
  if (!/(?=.*\d)/.test(password)) {
    message += " Digits,";
  }
  if (!/(?=.*[@$!%*?&])/.test(password)) {
    message += " Special characters ";
  }
  if (message) {
    message += " is missing.";
  }
  if (password.length < 8) {
    message += " Password must be at least 8 characters long.";
  }

  return { valid, message };
};

export const inputValid = (
  value: string,
  id: string
): { valid: boolean; message: string } => {
  if (id === "email") {
    return {
      valid: emailSchema.safeParse(value).success,
      message: "Email is not valid.",
    };
  } else if (id === "phone") {
    return {
      valid: phoneValid(value).isValid,
      message: "Phone is not valid.",
    };
  } else if (id === "password") {
    const { valid, message } = isStrongPassword(value);
    return { valid, message };
  } else if (id === "month") {
    return {
      valid: +value < 13 && +value >= 0,
      message: "Month between 1 to 12.",
    };
  }

  return { valid: true, message: "" };
};
