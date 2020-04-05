import { newid } from 'cevitxe-signal-client'
import { Repo } from './Repo'

export const repoFromSnapshot = async (
  obj: any,
  collections: string[] = []
): Promise<Repo<any>> => {
  const repo = new Repo<any>({
    discoveryKey: 'brilliant-test',
    databaseName: `testdb-${newid()}`,
    collections,
  })
  await repo.open()
  await repo.createFromSnapshot(obj)
  return repo
}
