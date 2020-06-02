import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';
import { Client } from './types/Client';
import { Animations } from './types/Animations';
import { UI } from './types/UI';

export type RootStoreModel = Instance<typeof RootStore>;
export type RootStoreSnapshotIn = SnapshotIn<typeof RootStore>;
export type RootStoreSnapshotOut = SnapshotOut<typeof RootStore>;

const RootStore = types.model("RootStore", {
    client: Client,
    animations: Animations,
    ui: UI
})

export default RootStore;



