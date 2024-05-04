import { BlockProps } from './types.ts';

export function Block({ spacing, isInline, children }: BlockProps) {
  return (
    <div
      style={{
        marginBottom: spacing,
        display: isInline ? 'inline-block' : 'block',
      }}
    >
      {children}
    </div>
  );
}
