export function DallahLogo({ size = 40 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
      aria-label="كيف الضيافة - شعار"
    >
      {/* شعار SVG محلي: next/image لا يحسّن SVG (يمرّره كما هو)، لذا <img>
          مع width/height صريحين هو الصحيح هنا — يمنع CLS بلا طبقة تحسين عبثية. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/logo-1.svg"
        alt="كيف الضيافة"
        width={size}
        height={size}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
}
