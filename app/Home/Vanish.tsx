"use client";

import { PlaceholdersAndVanishInput } from './Vanishing'

export function PlaceholdersAndVanishInputDemo() {
    const placeholders = [
        "What are the symptoms of diabetes?",
        "How does high blood pressure affect the body?",
        "What is the recommended daily intake of vitamin D?",
        "How can you prevent heart disease?",
        "What are the side effects of common antibiotics?",
        "How do you perform CPR?",
        "What is the difference between a cold and the flu?",
        "What are the benefits of a balanced diet?",
        "How does stress impact overall health?",
        "What are the signs of a stroke?"
      ];
      

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col justify-center  items-center px-1">
     
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
