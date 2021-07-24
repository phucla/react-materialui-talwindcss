export interface ProductType {
  product: {
    products: Product[]
    searchText: string
    error: string
    loading: boolean
  }
}

export interface Product {
  id: string
  request: {
    client: string
    date: string
    status: 'COMPLETE' | 'NOT COMPLETE'
    decision: 'Manual' | 'Auto'
    csDescision: 'Reject' | 'Apply'
  }
  front: {
    url: string
    description: string
  }
  back: {
    url: string
    description: string
  }
  selfie: {
    url: string
    description: string
  }
  ocr: {
    name: string
    dob: string
    gender: string
    address: string
    hometown?: string
    place: string
  }
  faceMaching: number
}

export interface SearchProduct {
  name: string,
  city: string
}
