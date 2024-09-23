import ProductImageUpload from '@/components/admin-view/image-upload';
import AdminProductTile from '@/components/admin-view/product-tile';
import CommonForm from '@/components/common/form';
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { addProductFormElements } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { addNewProduct, fetchAllProducts } from '@/store/admin/products-slice';
import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
}

function AdminProducts() {

  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [ formData, setFormData ] = useState(initialFormData);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);

  const { productList } = useSelector((state) => state.adminProducts);
  
  const dispatch = useDispatch();
  const { toast } = useToast();
console.log(productList, "productsPage");

function handleDelete(getCurrentProductId) {
  dispatch(deleteProduct(getCurrentProductId)).then((data) => {
    if (data?.payload?.success) {
      dispatch(fetchAllProducts());
    }
  });
}
  function onSubmit(event){
    event.preventDefault();
    dispatch(addNewProduct({
      ...formData,
      image: uploadedImageUrl
    })).then((data)=>{
      dispatch(fetchAllProducts());
      setOpenCreateProductsDialog(false);
      setImageFile(null);
      setFormData(initialFormData);
      toast({
        title: "Product add successfully",
      });
    })
  }
  
  useEffect(()=>{
    dispatch(fetchAllProducts());
  },[dispatch]);

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)} >
          Add New Product
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productList && productList.length > 0
          ? productList.map((productItem) => (
              <AdminProductTile
                key={productItem._id}
                setFormData={setFormData}
                setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                setCurrentEditedId={setCurrentEditedId}
                product={productItem}
                handleDelete={handleDelete}
              />
            ))
          : null}
      </div>


      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Sheet open={openCreateProductsDialog} onOpenChange={() => {
          setOpenCreateProductsDialog(false);
        }}>
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader>
              <SheetTitle>Add New Product</SheetTitle>
            </SheetHeader>
            <div className="py-6">
              <ProductImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                setImageLoadingState={setImageLoadingState}
                imageLoadingState={imageLoadingState}
                isEditMode={currentEditedId !== null}
              />

              <CommonForm 
                formControls={addProductFormElements} 
                formData={formData} 
                setFormData={setFormData}
                onSubmit={onSubmit}
                buttonText={currentEditedId !== null ? "Edit" : "Add"}
                // isBtnDisabled={!isFormValid()}
              />
            </div>
          </SheetContent>

        </Sheet>
      </div>


    </Fragment>
  )
}

export default AdminProducts