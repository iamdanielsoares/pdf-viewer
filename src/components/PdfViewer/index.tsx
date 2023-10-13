import { Viewer } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";

import PDF from "../../assets/pdfTest.pdf";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { renderToolbarComponent } from "../Toolbar";

export const PdfViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar: renderToolbarComponent(),
    sidebarTabs: () => [],
  });

  return (
    <div className="w-[720px] h-full p-4 rounded">
      <Viewer fileUrl={PDF} plugins={[defaultLayoutPluginInstance]} />
    </div>
  );
};
