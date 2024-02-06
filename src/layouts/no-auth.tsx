import Head from "next/head";
import { config } from "@towns/utils/config";
import { Inter } from "next/font/google";
import RowWrapper from "@towns/components/RowWrapper";

const inter = Inter({ subsets: ["latin"] });

const NoAuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const collapsed = false;

  return (
    <>
      <Head>
        <title>{config.siteName || ""}</title>
        <link rel="icon" type="image/png" sizes="32x32" href={config.favicon} />
      </Head>
      <div
        data-layout={"layout-1"}
        data-collapsed={collapsed}
        data-background={"light"}
        data-navbar={"light"}
        data-left-sidebar={"light"}
        className={`font-sans antialiased text-sm disable-scrollbars default-mode h-full overflow-y-auto overflow-x-hidden scrollableContainer`}
      >
        <div className="flex min-h-screen flex-col items-center justify-between p-0">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            {/* <RowWrapper>
              <HeaderNav onToggle={handleCollapse} isCollapsed={collapsed} />
            </RowWrapper> */}
            <RowWrapper>{children}</RowWrapper>
          </div>
        </div>
      </div>
    </>
  );
};
export default NoAuthLayout;
