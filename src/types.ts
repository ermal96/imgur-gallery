import { AxiosResponse } from "axios";

type NewType = {
    error?: AxiosResponse;
    loading: boolean;
    items: GalleryItem[];
    filters: GalleryFilters;
};

export type GalleryState = NewType

export type GalleryFilters = {
    section: "hot" | "top" | "user";
    sort: "viral" | "top" | "time" | "rising";
    page: number;
    window: "day" | "week" | "month" | "all";
    showViral: boolean;
    showMature: boolean;
    albumPreviews: boolean
    visible: number;
}

export type GalleryResponse = {
    data: {
        data: GalleryItem[]
    }
    success: boolean
    status: number
}

export type GalleryItem = {
    id: string
    title: string
    description: any
    datetime: number
    cover: string
    cover_width: number
    cover_height: number
    account_url: string
    account_id: number
    privacy: string
    layout: string
    views: number
    link: string
    ups: number
    downs: number
    points: number
    score: number
    is_album: boolean
    vote: any
    favorite: boolean
    nsfw: boolean
    section: string
    comment_count: number
    favorite_count: number
    topic: any
    topic_id: any
    images_count: number
    in_gallery: boolean
    is_ad: boolean
    tags: any[]
    ad_type: number
    ad_url: string
    in_most_viral: boolean
    include_album_ads: boolean
    images: Image[]
    ad_config: AdConfig
}

export type Image = {
    id: string
    title: any
    description: any
    datetime: number
    type: string
    animated: boolean
    width: number
    height: number
    size: number
    views: number
    bandwidth: number
    vote: any
    favorite: boolean
    nsfw: any
    section: any
    account_url: any
    account_id: any
    is_ad: boolean
    in_most_viral: boolean
    has_sound: boolean
    tags: any[]
    ad_type: number
    ad_url: string
    edited: string
    in_gallery: boolean
    link: string
    comment_count: any
    favorite_count: any
    ups: any
    downs: any
    points: any
    score: any
}

export type AdConfig = {
    safeFlags: string[]
    highRiskFlags: any[]
    unsafeFlags: any[]
    wallUnsafeFlags: any[]
    showsAds: boolean
    showAdLevel: number
    safe_flags: string[]
    high_risk_flags: any[]
    unsafe_flags: any[]
    wall_unsafe_flags: any[]
    show_ads: boolean
    show_ad_level: number
}
