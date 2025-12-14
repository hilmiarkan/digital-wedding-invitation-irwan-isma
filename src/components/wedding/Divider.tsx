import divider from '../../media/divider.png';

export function Divider() {
  return (
    <div className="w-full h-[1px] overflow-hidden relative z-20">
      <img src={divider} alt="" className="w-full h-full object-cover object-center" />
    </div>
  );
}

