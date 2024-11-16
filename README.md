Color Palette Overview
Color Name Hex Code Usage
Salmon Red #FF6B6B Primary color for main actions, icons, and important prompts

Soft Peach #FFD4D4 Secondary color for accent elements, secondary actions, and hover states

Pale Grey #EFEFEF Background color for main sections, keeping a calm and clean interface

Dark Grey #2B2B2B Text color to ensure readability and a professional look

Color Usage Guidelines
1. Salmon Red (#FF6B6B)
   Usage: Primary color.
   Purpose: Used for critical actions like emergency prompts, main buttons, and icons that require immediate attention.
   Example Areas:
   "Call for Help" button
   Important notifications or alerts
   Icons representing key features like emergency contact

2. Soft Peach (#FFD4D4)
   Usage: Secondary color for accents and backgrounds.
   Purpose: Complements the primary color without overpowering it, making the interface feel welcoming yet professional.
   Example Areas:
   Backgrounds of secondary actions or contact cards
   Hover states for interactive elements
   Borders or dividers that separate sections

3. Pale Grey (#EFEFEF)
   Usage: General background color.
   Purpose: Maintains a calm, non-distracting base that ensures content stands out while providing a clean and organized look.
   Example Areas:
   Main background of all pages
   Panels or cards for content sections
   Contact lists and additional information areas

4. Dark Grey (#2B2B2B)
   Usage: Text color.
   Purpose: Ensures readability of all text elements while reinforcing a professional tone.
   Example Areas:
   Body text, headers, and labels
   Instructions and emergency descriptions
   Any text that needs to be clear and legible
   Example Color Scheme Usage
   Here's an example of how the colors could be applied across the SwiftAid interface:

Home Screen:

Use Salmon Red (#FF6B6B) for the "Emergency" button and key icons.
Set the background as Pale Grey (#EFEFEF) to keep it light and calming.
Text (e.g., "Are you in an emergency?") should be in Dark Grey (#2B2B2B) for contrast and readability.
Contacts and Emergency Types:

Contact cards can have Soft Peach (#FFD4D4) accents to differentiate them while maintaining a cohesive look.
Icons or emergency type options, such as "Accident" or "Chest Pain," should be in Salmon Red (#FF6B6B) to highlight importance.


Used 
ShadCN for some components,
Tailwind CSS for styling,
Lottiefiles for animated icons

Format For Using Lottiefiles Icon
Install LottieFiles’ official React player: Open your project and install the following dependency via npm.

npm install @lottiefiles/dotlottie-react

Add the dotLottie component: Insert the dotLottie component to your React app where you want the animation to appear.

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const App = () => {
  return (
    <DotLottieReact
      src="path/to/animation.lottie"
      loop
      autoplay
    />
  );
};