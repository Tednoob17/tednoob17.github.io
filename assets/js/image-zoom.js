// Image Zoom Functionality
(function() {
    'use strict';
    
    // Create modal element
    function createModal() {
        const modal = document.createElement('div');
        modal.className = 'image-zoom-modal';
        modal.innerHTML = `
            <span class="image-zoom-close">&times;</span>
            <img src="" alt="Zoomed image">
        `;
        document.body.appendChild(modal);
        return modal;
    }
    
    // Initialize zoom functionality
    function initImageZoom() {
        console.log('Initializing image zoom...');
        
        const modal = createModal();
        const modalImg = modal.querySelector('img');
        const closeBtn = modal.querySelector('.image-zoom-close');
        
        // Get all images in content area - try multiple selectors
        const selectors = [
            '.content img',
            'main img',
            'article img',
            '.post-content img',
            'img'
        ];
        
        let images = [];
        for (const selector of selectors) {
            images = document.querySelectorAll(selector);
            if (images.length > 0) {
                console.log(`Found ${images.length} images with selector: ${selector}`);
                break;
            }
        }
        
        if (images.length === 0) {
            console.warn('No images found for zoom functionality');
            return;
        }
        
        images.forEach((img, index) => {
            console.log(`Adding click handler to image ${index + 1}:`, img.src);
            
            // Wrap image in a clickable container if not already wrapped
            if (!img.parentElement.classList.contains('image-zoom-wrapper')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'image-zoom-wrapper';
                wrapper.style.display = 'inline-block';
                wrapper.style.cursor = 'zoom-in';
                img.parentNode.insertBefore(wrapper, img);
                wrapper.appendChild(img);
                
                // Add click handler to wrapper instead of image
                wrapper.addEventListener('click', function(e) {
                    console.log('Wrapper clicked! Opening image:', img.src);
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    modal.classList.add('active');
                    modalImg.src = img.src;
                    modalImg.alt = img.alt || 'Zoomed image';
                    document.body.style.overflow = 'hidden';
                }, true);
            }
            
            // Also add to image itself as backup
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function(e) {
                console.log('Image clicked directly!', this.src);
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                modal.classList.add('active');
                modalImg.src = this.src;
                modalImg.alt = this.alt || 'Zoomed image';
                document.body.style.overflow = 'hidden';
            }, true);
        });
        
        // Close modal on click
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target === closeBtn) {
                console.log('Modal background clicked');
                closeModal();
            }
        });
        
        closeBtn.addEventListener('click', function(e) {
            console.log('Close button clicked');
            e.stopPropagation();
            closeModal();
        });
        
        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                console.log('ESC pressed');
                closeModal();
            }
        });
        
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        console.log('Image zoom initialized successfully');
    }
    
    // Wait a bit to ensure all other scripts are loaded
    setTimeout(function() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initImageZoom);
        } else {
            initImageZoom();
        }
    }, 100);
})();
