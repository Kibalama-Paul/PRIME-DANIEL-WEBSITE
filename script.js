const TOTAL_FRAMES = 236;
const canvas = document.getElementById('scroll-canvas');
const ctx = canvas.getContext('2d');
const loader = document.getElementById('loader');
const loaderProgress = document.getElementById('loader-progress');

const images = [];
let loadedCount = 0;
let currentFrame = 0;
let targetFrame = 0;
let animationFrameId = null;

// Generate image filename path
function currentFramePath(index) {
  const paddedIndex = String(index).padStart(3, '0');
  return `frames/ezgif-frame-${paddedIndex}.jpg`;
}

// Adjust canvas resolution for retina displays & window size
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  
  // Render current frame after resize
  render();
}

// Draw image covering the entire canvas (aspect ratio cover)
function drawCover(img) {
  if (!img || !img.complete || img.naturalWidth === 0) return;

  const dpr = window.devicePixelRatio || 1;
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;

  // Calculate cover scaling
  const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
  const newWidth = imgWidth * scale;
  const newHeight = imgHeight * scale;

  // Center alignment
  const x = (canvasWidth - newWidth) / 2;
  const y = (canvasHeight - newHeight) / 2;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(img, x, y, newWidth, newHeight);
}

// Calculate target frame from scroll position
function updateTargetFrame() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
  if (maxScroll <= 0) {
    targetFrame = 0;
    return;
  }

  const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
  targetFrame = scrollFraction * (TOTAL_FRAMES - 1);
}

// Render loop using Linear Interpolation (LERP) for ultra-smooth scrolling
function render() {
  // Lerp factor (0.12 gives smooth, responsive motion)
  currentFrame += (targetFrame - currentFrame) * 0.12;

  const frameIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(currentFrame)));
  const img = images[frameIndex];

  if (img) {
    drawCover(img);
  }

  animationFrameId = requestAnimationFrame(render);
}

// Preload all 236 frames
function preloadFrames() {
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = currentFramePath(i);

    img.onload = () => {
      loadedCount++;
      const progressPercent = (loadedCount / TOTAL_FRAMES) * 100;
      if (loaderProgress) {
        loaderProgress.style.width = `${progressPercent}%`;
      }

      // Hide loader once enough frames are loaded (or all frames)
      if (loadedCount === 1) {
        // Render first frame immediately
        drawCover(img);
      }

      if (loadedCount >= TOTAL_FRAMES) {
        if (loader) {
          loader.classList.add('hidden');
        }
      }
    };

    img.onerror = () => {
      loadedCount++;
    };

    images.push(img);
  }
}

// Initialize
window.addEventListener('resize', resizeCanvas);
window.addEventListener('scroll', updateTargetFrame, { passive: true });

// Event listener for wheel to ensure instant updates
window.addEventListener('wheel', updateTargetFrame, { passive: true });

// Start application
resizeCanvas();
preloadFrames();
updateTargetFrame();
render();
