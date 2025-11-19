import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Bucks County SAT Prep',
        default: 'Bucks County SAT Prep | By Students, For Students'
    },
    description: 'High-impact SAT tutoring by high schoolers who recently aced the test. In-person in Bucks County & Online.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/bucks-sat-logo-removebg-preview.png" sizes="any" />
            </head>
            <body className="antialiased bg-white text-slate-900">
                {children}
            </body>
        </html>
    );
}
