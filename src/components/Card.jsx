"use client";

import * as React from "react";
import {
  Card as UiCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Card({ makeName, modelName }) {
  return (
    <UiCard>
      <CardHeader>
        <CardTitle>{makeName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{modelName}</p>
      </CardContent>
    </UiCard>
  );
}
