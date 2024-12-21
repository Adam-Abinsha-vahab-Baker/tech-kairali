'use client';

export default function SchedulePage() {
    return (
        <div className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold text-center mb-8">Schedule a Consultation</h1>
                <div className="bg-white shadow rounded-lg p-8">
                    <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
                    <p className="text-lg mb-4">
                        Tech Kairali Chitfund Pvt. Ltd.
                        <br />
                        123 Financial Hub,
                        MG Road, Ernakulam, Kerala,
                        PIN - 682016
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-2">Phone Number</h3>
                    <p className="text-lg">
                        +91-9876543210
                        <br />
                        +91-9876543211
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-2">Description</h3>
                    <p className="text-muted-foreground">
                        At Tech Kairali Chitfund, we pride ourselves on providing transparent and reliable chit fund solutions.
                        Our experienced team is here to help you find the best plan tailored to your financial needs.
                        Visit our office or give us a call to learn more.
                    </p>
                </div>
            </div>
        </div>
    );
}
