"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { branches, type Branch } from "@/data/branches";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { cn } from "@/lib/utils";

// Fix for default marker icon issue with modern bundlers
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Component to programmatically change map view
const ChangeView = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const BranchLocator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  const filteredBranches = branches.filter(branch =>
    branch.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const mapCenter: [number, number] = selectedBranch
    ? [selectedBranch.lat, selectedBranch.lng]
    : [20.5937, 78.9629]; // Default center of India

  const mapZoom = selectedBranch ? 14 : 5;

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Find Our Branches</h1>
        <p className="mt-4 text-lg text-gray-500">Search by city or pin code to find the JewelPledge branch nearest to you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Search and List */}
        <div className="lg:col-span-1">
          <Input
            type="text"
            placeholder="Enter city or pin code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 text-lg mb-6"
          />
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {filteredBranches.map(branch => (
              <Card
                key={branch.id}
                onClick={() => setSelectedBranch(branch)}
                className={cn(
                  "cursor-pointer transition-all",
                  selectedBranch?.id === branch.id ? "border-primary ring-2 ring-primary" : "hover:border-gray-400"
                )}
              >
                <CardHeader>
                  <CardTitle>{branch.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column: Map */}
        <div className="lg:col-span-2 h-[500px] lg:h-auto rounded-lg overflow-hidden border">
          <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={false} className="h-full w-full">
            <ChangeView center={mapCenter} zoom={mapZoom} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredBranches.map(branch => (
              <Marker key={branch.id} position={[branch.lat, branch.lng]}>
                <Popup>
                  <strong>{branch.name}</strong><br />{branch.address}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default BranchLocator;