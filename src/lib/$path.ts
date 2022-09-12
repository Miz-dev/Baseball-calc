export const pagesPath = {
  "era": {
    $url: (url?: { hash?: string }) => ({ pathname: '/era' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
