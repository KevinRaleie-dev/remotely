export interface Job {
    url: string;
    title: string;
    company_name: string;
    job_type: string;
    salary: string;
    category: string;
    publication_date: string;
    company_logo_url: string;
    description: string;
}

export interface Data {
    legal_notice?: string;
    job_count: number;
    jobs: Job[];
}