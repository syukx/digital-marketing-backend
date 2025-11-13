// AdminDashboard.jsx — Final Optimized Version
import React, { useEffect, useState } from "react";
import {
  Trash2,
  RefreshCcw,
  Mail,
  User,
  Clock,
  Phone,
  Building2,
  Search,
  MessageSquare,
  Settings,
} from "lucide-react";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Safe fallback if .env missing
  const API_URL = process.env.REACT_APP_API_URL;


  // ✅ Fetch contacts once when mounted
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/contacts`);
      if (!response.ok) throw new Error("Failed to fetch contacts");

      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("❌ Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []); // ✅ runs only once

  // ✅ Delete a contact safely
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    try {
      const response = await fetch(`${API_URL}/api/contacts/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete contact");

      setContacts((prev) =>
        prev.filter((c) => c.id !== id && c._id !== id)
      );
    } catch (error) {
      console.error("❌ Error deleting contact:", error);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={fetchContacts}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            <RefreshCcw className="w-5 h-5 mr-2" /> Refresh
          </button>
        </div>

        {/* Data Display */}
        {loading ? (
          <p className="text-gray-600 text-center">Loading contacts...</p>
        ) : contacts.length === 0 ? (
          <p className="text-gray-500 text-center">
            No contact submissions yet.
          </p>
        ) : (
          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-gray-200 text-gray-800 uppercase text-sm sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">#</span>
                      <span>ID</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-700" />
                      <span>NAME</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-gray-700" />
                      <span>EMAIL</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-gray-700" />
                      <span>PHONE</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <Building2 size={16} className="text-gray-700" />
                      <span>COMPANY</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <Search size={16} className="text-gray-700" />
                      <span>SERVICE</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <MessageSquare size={16} className="text-gray-700" />
                      <span>MESSAGE</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-700" />
                      <span>DATE</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-center">
                    <div className="flex justify-center items-center gap-2">
                      <Settings size={16} className="text-gray-700" />
                      <span>ACTIONS</span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((contact, index) => (
                  <tr
                    key={contact.id || contact._id}
                    className="border-b hover:bg-gray-50 even:bg-gray-100 transition"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-semibold">{contact.name}</td>
                    <td className="px-4 py-3">{contact.email}</td>
                    <td className="px-4 py-3">{contact.phone || "-"}</td>
                    <td className="px-4 py-3">{contact.company || "-"}</td>
                    <td className="px-4 py-3">{contact.service || "-"}</td>
                    <td className="px-4 py-3">{contact.message}</td>
                    <td className="px-4 py-3 text-gray-500">
                      {contact.created_at
                        ? new Date(contact.created_at).toLocaleString()
                        : "N/A"}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() =>
                          handleDelete(contact.id || contact._id)
                        }
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
