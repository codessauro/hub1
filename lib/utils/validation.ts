import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
  role: z.enum(["INVESTOR", "PROJECT_CREATOR"]),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const investmentSchema = z.object({
  amount: z.number().positive(),
  projectId: z.string().cuid(),
});

export const projectSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10),
  category: z.enum([
    "TECHNOLOGY",
    "REAL_ESTATE",
    "RENEWABLE_ENERGY",
    "HEALTHCARE",
    "EDUCATION",
    "AGRICULTURE",
    "ENTERTAINMENT",
    "OTHER",
  ]),
  targetAmount: z.number().positive(),
  deadline: z.date().min(new Date()),
});