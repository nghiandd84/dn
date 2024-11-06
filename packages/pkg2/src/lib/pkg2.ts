import { pkg1 } from '@dn/pkg1'
export function pkg2(): string {
  const x = pkg1();
  return 'pkg2 with pkg1 ' + x;
}
