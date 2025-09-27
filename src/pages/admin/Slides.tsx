"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { slidesData as initialSlides, type Slide } from "@/data/slides";
import { SlideForm } from "@/components/admin/SlideForm";

const AdminSlides = () => {
  const [slides, setSlides] = useState<Slide[]>(initialSlides);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSlide, setEditingSlide] = useState<Slide | null>(null);

  const handleAddSlide = () => {
    setEditingSlide(null);
    setIsDialogOpen(true);
  };

  const handleEditSlide = (slide: Slide) => {
    setEditingSlide(slide);
    setIsDialogOpen(true);
  };

  const handleDeleteSlide = (id: number) => {
    setSlides(slides.filter((slide) => slide.id !== id));
  };

  const handleFormSubmit = (values: Omit<Slide, 'id'>) => {
    if (editingSlide) {
      setSlides(
        slides.map((slide) =>
          slide.id === editingSlide.id ? { ...editingSlide, ...values } : slide
        )
      );
    } else {
      const newSlide: Slide = {
        ...values,
        id: Math.max(...slides.map((s) => s.id), 0) + 1,
      };
      setSlides([...slides, newSlide]);
    }
    setIsDialogOpen(false);
    setEditingSlide(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Hero Slides</h1>
        <Button onClick={handleAddSlide}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Slide
        </Button>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{editingSlide ? "Edit Slide" : "Add New Slide"}</DialogTitle>
            <DialogDescription>
              {editingSlide ? "Update the details for this slide." : "Fill in the details for the new slide."}
            </DialogDescription>
          </DialogHeader>
          <SlideForm
            onSubmit={handleFormSubmit}
            slide={editingSlide}
            onCancel={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
      <Card>
        <CardHeader>
          <CardTitle>Slide List</CardTitle>
          <CardDescription>
            Manage the slides appearing on your homepage hero carousel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Subtitle</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {slides.map((slide) => (
                <TableRow key={slide.id}>
                  <TableCell>
                    <img src={slide.image} alt={slide.title} className="h-12 w-24 rounded-md object-cover" />
                  </TableCell>
                  <TableCell className="font-medium">{slide.title}</TableCell>
                  <TableCell>{slide.subtitle}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditSlide(slide)}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteSlide(slide.id)}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSlides;