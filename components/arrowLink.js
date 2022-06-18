import { ArrowRight } from "./icons";

export default function ArrowLink({ className }) {
  return (
    <>
      <div className={`'outer-container' ${className}`}>
        <div className="container">
          <ArrowRight width={18} height={14} />
        </div>
      </div>

      <style jsx>{`
        .outer-container {
          background: #222638;
          padding: 10px;
        }

        .container {
          background: #383c4c;
          padding: 6px 10px 6px 10px;
        }
      `}</style>
    </>
  );
}
