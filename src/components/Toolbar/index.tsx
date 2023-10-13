import { ReactElement } from "react";

import { ToolbarProps, ToolbarSlot } from "@react-pdf-viewer/default-layout";
import { cn } from "../../utils/cn";
import { Button } from "./Button";

export const renderToolbarComponent = () => {
  const colorsByTheme = "text-blue-600 text-lg";

  const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
    <Toolbar>
      {(slots: ToolbarSlot) => {
        const {
          ShowSearchPopover,
          Print,
          ZoomIn,
          ZoomOut,
          CurrentPageInput,
          CurrentScale,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Download,
          EnterFullScreen,
        } = slots;
        return (
          <div className="flex w-full items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <ShowSearchPopover>
                {(props) => <Button onClick={props.onClick} icon="search" />}
              </ShowSearchPopover>
              <div className="flex items-center gap-1">
                <ZoomOut>
                  {(props) => <Button onClick={props.onClick} icon="zoomOut" />}
                </ZoomOut>
                <CurrentScale>
                  {(props) => (
                    <span className={cn(colorsByTheme, "select-none")}>
                      {Number(props.scale * 100).toFixed(0)}%
                    </span>
                  )}
                </CurrentScale>
                <ZoomIn>
                  {(props) => <Button onClick={props.onClick} icon="zoomIn" />}
                </ZoomIn>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GoToPreviousPage>
                {(props) => (
                  <Button
                    onClick={props.onClick}
                    disabled={props.isDisabled}
                    icon="pageUp"
                  />
                )}
              </GoToPreviousPage>
              <div className="flex items-center">
                <CurrentPageInput />
                <span className={cn(colorsByTheme)}>/</span>
                <NumberOfPages>
                  {(props) => (
                    <span className={cn(colorsByTheme)}>
                      {props.numberOfPages}
                    </span>
                  )}
                </NumberOfPages>
              </div>
              <GoToNextPage>
                {(props) => (
                  <Button
                    onClick={props.onClick}
                    disabled={props.isDisabled}
                    icon="pageDown"
                  />
                )}
              </GoToNextPage>
            </div>
            <div className="flex items-center gap-2">
              <Print>
                {(props) => <Button onClick={props.onClick} icon="print" />}
              </Print>
              <EnterFullScreen>
                {(props) => <Button onClick={props.onClick} icon="expand" />}
              </EnterFullScreen>
              <Download>
                {(props) => <Button onClick={props.onClick} icon="download" />}
              </Download>
            </div>
          </div>
        );
      }}
    </Toolbar>
  );

  return renderToolbar;
};
