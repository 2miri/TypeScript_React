export default function CalculatorButton({
  value,
  className,
  onClick,
}: {
  value: string;
  className: string;
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}) {
  return (
    <>
      <input
        type="button"
        className={className}
        value={value}
        onClick={onClick}
      />
    </>
  );
}
