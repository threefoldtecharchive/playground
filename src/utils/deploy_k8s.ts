import {
  type GridClient,
  type FilterOptions,
  KubernetesNodeModel,
  randomChoice,
  K8SModel
} from 'grid3_client'
import type { K8SWorker } from '../types'
import { createNetwork } from './deploy_helpers'

export async function deployK8s(grid: GridClient, options: DeployK8SOptions) {
  const k8s = new K8SModel()
  k8s.name = options.name
  k8s.secret = options.clusterToken
  k8s.network = createNetwork({ addAccess: true })
  k8s.masters = [await createWorker(grid, options.master)]
  k8s.workers = await Promise.all(options.workers.map(createWorker.bind(undefined, grid)))
  k8s.metadata = options.metadata
  k8s.description = options.description
  k8s.ssh_key = options.sshKey
  await grid.k8s.deploy(k8s)
  return loadK8S(grid, k8s.name)
}

export function loadK8S(grid: GridClient, name: string) {
  return grid.k8s.getObj(name)
}

async function createWorker(grid: GridClient, data: K8SWorker) {
  const filters: FilterOptions = {
    cru: data.cpu,
    mru: Math.round(data.memory / 1024),
    farmId: data.farm!.farmID,
    farmName: data.farm!.name,
    sru: data.diskSize + data.rootFsSize,
    publicIPs: data.ipv4,
    availableFor: grid.twinId
  }

  const worker = new KubernetesNodeModel()
  worker.name = data.name
  worker.node_id = +randomChoice(await grid.capacity.filterNodes(filters)).nodeId
  worker.cpu = data.cpu
  worker.disk_size = data.diskSize
  worker.memory = data.memory
  worker.public_ip = data.ipv4
  worker.public_ip6 = data.ipv6
  worker.rootfs_size = data.rootFsSize
  worker.planetary = data.planetary
  worker.solutionProviderID = +process.env.INTERNAL_SOLUTION_PROVIDER_ID!
  return worker
}

export interface DeployK8SOptions {
  name: string
  clusterToken: string
  master: K8SWorker
  workers: K8SWorker[]
  sshKey: string
  metadata?: string
  description?: string
}
