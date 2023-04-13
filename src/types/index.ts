export interface K8SWorker {
  name: string
  cpu: number
  memory: number
  diskSize: number
  ipv4: boolean
  ipv6: boolean
  planetary: boolean
  rootFsSize: number
  farm?: Farm
}

export interface Farm {
  name: string
  farmID: number
}