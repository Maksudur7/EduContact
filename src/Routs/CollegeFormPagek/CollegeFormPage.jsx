import { useState } from "react";

export default function CollegeFormPage() {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        rating: "",
        location: "",
        admissionDate: "",
        admissionPeriod: "",
        researchProjects: "",
        about: "",
        research: "",
        events: [""],
        sports: [""],
        admissionProcess: [""],
        gallery: [""],
        banner: "",
    });

    // handle text input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // handle array input
    const handleArrayChange = (index, field, value) => {
        const updated = [...formData[field]];
        updated[index] = value;
        setFormData((prev) => ({ ...prev, [field]: updated }));
    };

    const addField = (field) => {
        setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
    };

    const removeField = (field, index) => {
        const updated = formData[field].filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, [field]: updated }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("✅ Submitted Data:", formData);
        alert("College data submitted! (Check console)");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-4xl"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
                    College Data Form
                </h2>

                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="font-semibold block mb-1">College Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="e.g., MIT"
                        />
                    </div>
                    <div>
                        <label className="font-semibold block mb-1">Location</label>
                        <input
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="e.g., Cambridge, MA"
                        />
                    </div>
                    <div>
                        <label className="font-semibold block mb-1">Rating</label>
                        <input
                            type="number"
                            step="0.1"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="e.g., 4.8"
                        />
                    </div>
                    <div>
                        <label className="font-semibold block mb-1">Admission Date</label>
                        <input
                            type="date"
                            name="admissionDate"
                            value={formData.admissionDate}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                        />
                    </div>
                </div>

                {/* Admission Period */}
                <div className="mb-4">
                    <label className="font-semibold block mb-1">Admission Period</label>
                    <input
                        name="admissionPeriod"
                        value={formData.admissionPeriod}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        placeholder="e.g., August 15 - November 30, 2024"
                    />
                </div>

                {/* About */}
                <div className="mb-4">
                    <label className="font-semibold block mb-1">About</label>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        className="w-full border p-2 rounded h-20"
                        placeholder="Write about the college..."
                    />
                </div>

                {/* Research */}
                <div className="mb-4">
                    <label className="font-semibold block mb-1">Research</label>
                    <textarea
                        name="research"
                        value={formData.research}
                        onChange={handleChange}
                        className="w-full border p-2 rounded h-20"
                        placeholder="Describe research areas..."
                    />
                </div>

                {/* Research Projects */}
                <div className="mb-4">
                    <label className="font-semibold block mb-1">
                        Number of Research Projects
                    </label>
                    <input
                        type="number"
                        name="researchProjects"
                        value={formData.researchProjects}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>

                {/* Admission Process */}
                <div className="mb-6">
                    <label className="font-semibold block mb-1">
                        Admission Process Steps
                    </label>
                    {formData.admissionProcess.map((step, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <input
                                value={step}
                                onChange={(e) =>
                                    handleArrayChange(index, "admissionProcess", e.target.value)
                                }
                                className="w-full border p-2 rounded"
                                placeholder={`Step ${index + 1}`}
                            />
                            <button
                                type="button"
                                onClick={() => removeField("admissionProcess", index)}
                                className="bg-red-500 text-white px-3 rounded"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addField("admissionProcess")}
                        className="text-indigo-600 text-sm font-semibold"
                    >
                        + Add Step
                    </button>
                </div>

                {/* Events */}
                <div className="mb-6">
                    <label className="font-semibold block mb-1">Events</label>
                    {formData.events.map((event, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <input
                                value={event}
                                onChange={(e) =>
                                    handleArrayChange(index, "events", e.target.value)
                                }
                                className="w-full border p-2 rounded"
                                placeholder="e.g., Innovation Week"
                            />
                            <button
                                type="button"
                                onClick={() => removeField("events", index)}
                                className="bg-red-500 text-white px-3 rounded"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addField("events")}
                        className="text-indigo-600 text-sm font-semibold"
                    >
                        + Add Event
                    </button>
                </div>

                {/* Sports */}
                <div className="mb-6">
                    <label className="font-semibold block mb-1">Sports</label>
                    {formData.sports.map((sport, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <input
                                value={sport}
                                onChange={(e) =>
                                    handleArrayChange(index, "sports", e.target.value)
                                }
                                className="w-full border p-2 rounded"
                                placeholder="e.g., Basketball"
                            />
                            <button
                                type="button"
                                onClick={() => removeField("sports", index)}
                                className="bg-red-500 text-white px-3 rounded"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addField("sports")}
                        className="text-indigo-600 text-sm font-semibold"
                    >
                        + Add Sport
                    </button>
                </div>

                {/* Gallery */}
                <div className="mb-6">
                    <label className="font-semibold block mb-1">Gallery Images</label>
                    {formData.gallery.map((img, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <input
                                value={img}
                                onChange={(e) =>
                                    handleArrayChange(index, "gallery", e.target.value)
                                }
                                className="w-full border p-2 rounded"
                                placeholder="Paste image URL"
                            />
                            <button
                                type="button"
                                onClick={() => removeField("gallery", index)}
                                className="bg-red-500 text-white px-3 rounded"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addField("gallery")}
                        className="text-indigo-600 text-sm font-semibold"
                    >
                        + Add Image
                    </button>
                </div>

                {/* Banner */}
                <div className="mb-4">
                    <label className="font-semibold block mb-1">Banner Image URL</label>
                    <input
                        name="banner"
                        value={formData.banner}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        placeholder="Paste banner image URL"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full mt-6 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                >
                    Submit College Info
                </button>
            </form>
        </div>
    );
}
