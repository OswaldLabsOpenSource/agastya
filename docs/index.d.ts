declare global {
    interface Window {
        agastya: any;
    }
}
export default class Agastya {
    constructor(apiKey: string, staging?: boolean);
    open(page?: string): Promise<{}>;
    close(): Promise<{}>;
    toggle(): Promise<{}>;
    navigate(page: string): Promise<{}>;
    unappend(): Promise<{}>;
    on(event: string, listener: Function): Promise<{}>;
    off(event: string): Promise<{}>;
    $emit(event: string, data: any): Promise<{}>;
    secureTrack(data: any): Promise<{}>;
    getDetails(): Promise<{}>;
    getUserInfo(): Promise<{}>;
    api(action: string, slug: any): Promise<{}>;
    stopIntegration(integration: string): Promise<{}>;
    updateIntegration(integration: string): Promise<{}>;
}
