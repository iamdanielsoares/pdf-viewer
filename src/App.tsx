import { Worker } from "@react-pdf-viewer/core";

// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { PdfViewer } from "./components/PdfViewer";

const App = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="flex flex-col items-center justify-center w-full h-[100vh]">
        <PdfViewer />
      </div>
    </Worker>
  );
};

export default App;
