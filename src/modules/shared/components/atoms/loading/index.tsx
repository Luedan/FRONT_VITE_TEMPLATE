import "./styled.css";

export function LoadingThin() {
  return (
    <div className="bg-muted/40 w-[100dvw] h-[100dvh] flex items-center justify-center">
      <div className="progress"></div>
    </div>
  );
}
