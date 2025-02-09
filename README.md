# React TypeScript Healthcare Management Application

This is a **Healthcare Management Application** built with **React**, **TypeScript**, and **Next.js**, designed to manage healthcare services efficiently and effectively.

## Features

- **Dark Mode**: Toggle between light and dark themes for accessibility.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dynamic Navigation**: Navigate seamlessly between Patients, Doctors, Appointments, Analytics, and Settings pages.
- **Interactive UI Components**: Powered by `shadCN/ui` and TailwindCSS for a polished user experience.
- **Scalable Architecture**: Built using modern practices for long-term scalability and maintainability.

## Pages

1. **Home**: Overview and quick navigation to other sections.
2. **Patients**: View and manage patient records.
3. **Doctors**: View doctor profiles and availability.
4. **Appointments**: Manage and schedule appointments.
5. **Analytics**: View healthcare insights and reports.
6. **Settings**: Customize application settings (e.g., theme toggle).

## Technologies Used

- **Frontend**: React, TypeScript, Next.js
- **UI Framework**: TailwindCSS, `shadCN/ui`
- **Animation**: Framer Motion
- **Theme Management**: `next-themes`
- **Icons**: Lucide React

## Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DesignByDevDan/React-TypeScript-Healthcare-Application.git
   cd React-TypeScript-Healthcare-Application
   ```

2. **Install dependencies**:
   Ensure you have `npm` or `yarn` installed.

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Folder Structure

```plaintext
├── app/                      # Next.js application pages
│   ├── patients/             # Patients management pages
│   ├── doctors/              # Doctors management pages
│   ├── appointments/         # Appointment management pages
│   ├── analytics/            # Analytics and reports pages
│   └── settings/             # Application settings pages
├── components/               # Reusable UI components
│   ├── ui/                   # shadCN UI components
│   └── theme-toggle.tsx      # Dark mode toggle button
├── lib/                      # Utility functions and helpers
├── prisma/                   # Database schema (if applicable)
├── public/                   # Static assets (images, fonts, etc.)
├── styles/                   # Global styles
├── README.md                 # Project documentation
├── package.json              # Project metadata and dependencies
└── tailwind.config.ts        # TailwindCSS configuration
```

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

### Author

**[DesignByDevDan](https://github.com/DesignByDevDan)**