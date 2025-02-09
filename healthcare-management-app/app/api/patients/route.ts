// app/api/patients/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as z from "zod";

// Initialize Prisma Client
const prisma = new PrismaClient();

// Zod schema for validation (must match the client-side schema)
const patientSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
});

// Define the POST handler
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = patientSchema.parse(body);
    const patient = await prisma.patient.create({
      data: validatedData,
    });
    return NextResponse.json(patient, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.errors || "Error creating patient" },
      { status: 400 }
    );
  }
}
