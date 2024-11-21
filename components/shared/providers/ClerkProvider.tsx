import { ClerkProvider as Clerk } from '@clerk/nextjs'

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Clerk>
            {children}
        </Clerk>
    );
}