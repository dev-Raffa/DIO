import { poppins } from "../fonts/poppins";
import { GlobalStyles } from "../styles/global";
import StyledComponentsRegistry from "../utils/styled-components/registrity";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
