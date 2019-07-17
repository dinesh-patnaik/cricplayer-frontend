import { Lista } from './lista';
import { Firstclass } from './firstclass';
import { Odis } from './odis';
import { TestMs } from './testms';
import { T20s } from './t20s';

export class Bowling {
     lista: Lista = new Lista();
     firstclass: Firstclass = new Firstclass();
     odis: Odis = new Odis();
     testms: TestMs = new TestMs();
     t20s: T20s = new T20s();
}
