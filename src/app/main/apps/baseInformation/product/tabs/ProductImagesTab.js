import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import clsx from 'clsx';
import FuseUtils from '@fuse/utils';
import { Controller, useForm, useFormContext, useFieldArray } from 'react-hook-form';
import { useState } from 'react';
import { Button } from '@nextui-org/react';

const Root = styled('div')(({ theme }) => ({
  '& .productImageFeaturedStar': {
    position: 'absolute',
    fontSize:'30px',
    top: 0,
    right: 0,
    color: "#F51E1E",
    opacity: 0,
  },

  '& .productImageUpload': {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },

  '& .productImageItem': {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    '&:hover': {
      '& .productImageFeaturedStar': {
        opacity: 0.8,
      },
    },
    '&.featured': {
      pointerEvents: 'none',
      boxShadow: theme.shadows[3],
      '& .productImageFeaturedStar': {
        opacity: 1,
      },
      '&:hover .productImageFeaturedStar': {
        opacity: 1,
      },
    },
  },
}));

function ProductImagesTab(props) {
  const methods = useFormContext();
  const { control, watch, setValue } = methods;
  const images = watch('images');
  // const[images,setImages] = useState(watch('images'));
  const { fields, remove, append } = useFieldArray({
    control,
    name: "images"
  });

  // const removeImage = (id) => {
  //   // this is the line that you are looking for
  //   setImages(() => images.filter((item) => item.id !== id));
  // };
  return (
    <Root>
      <div className="flex justify-center sm:justify-start flex-wrap -mx-16">
        <Controller
          name="images"
          defaultValue={[]}
          control={control}
          render={({ field: { onChange, value } }) => (
            <label
              htmlFor="button-file"
              className="productImageUpload flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg"
            >
              <input
                accept="image/*"
                className="hidden"
                id="button-file"
                type="file"
                onChange={async (e) => {
                  function readFileAsync() {
                    return new Promise((resolve, reject) => {
                      const file = e.target.files[0];
                      if (!file) {
                        return;
                      }
                      const reader = new FileReader();

                      reader.onload = () => {
                        resolve({
                          id: FuseUtils.generateGUID(),
                          imageName: file.name,
                          image: `data:${file.type};base64,${btoa(reader.result)}`,
                          type: file.type,
                        });
                      };

                      reader.onerror = reject;

                      reader.readAsBinaryString(file);
                    });
                  }

                  const newImage = await readFileAsync();

                  onChange([newImage, ...value]);
                  console.log("imgsAppend", fields);
                  console.log("afterAddFielsds", fields)
                  console.log("afterAddImages :", images)
                }}
              />
              <Icon fontSize="large" color="action">
                cloud_upload
              </Icon>
            </label>
          )}
        />
        {/* {
          feilds && */}
        <Controller
          name="featuredImageId"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) =>
            images.map((media, index) => (
              <div
                onClick={() => onChange(media.id)}
                onKeyDown={() => onChange(media.id)}
                role="button"
                tabIndex={0}
                className={clsx(
                  'productImageItem flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg',
                  media.id === value && 'featured'
                )}
                key={media.id}
              >

                <Icon
                 className="productImageFeaturedStar"
                  onClick={() => {
                    // console.log(media)
                    remove(index);
                    const newImages = images.filter((img) => img.imageName !== media.imageName)
                    // console.log("afterRemove", fields)
                    console.log("afterRemoveImages", newImages)
                    setValue("images", newImages);
                    // console.log("afterSetvalue",images);
                  }}>
                  close
                </Icon>

                <img className="max-w-none w-auto h-full" src={media.image} alt="product" />
              </div>
            ))
          }
        />
        {/* } */}

      </div>
    </Root>
  );
}

export default ProductImagesTab;
