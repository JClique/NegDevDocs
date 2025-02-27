---
prev: false
next: false
---

<script setup>
import SimpleDofCalculator from '../../components/calculators/simple-dof-calculator.vue';
</script>

# Depth of field

## What is depth of field?  

Depth of field (DoF) is the range of distance within a scene where objects appear acceptably sharp in an image. 
Anything outside this range will appear blurred or out of focus.  

## Factors affecting depth of field  

Depth of field is influenced by three main factors:  

### **1. Lens aperture (f-stop)**  
- A **smaller aperture (higher f-stop number)** increases depth of field.  
- A **larger aperture (lower f-stop number)** decreases depth of field.  

**Example:** f/2.8 creates a shallower DoF than f/11, assuming all other settings remain the same.  

### **2. Distance from subject**  
- A **greater subject distance** increases depth of field.  
- A **closer subject distance** decreases depth of field.  

**Example:** A subject 15m away will have a shallower DoF than a subject 15m away, given the same settings.  

### **3. Lens focal length**  
- A **wider focal length (shorter lens)** increases depth of field.  
- A **longer focal length (telephoto lens)** decreases depth of field.  

**Example:** A 200mm lens produces a shallower DoF than a 100mm lens at the same aperture and subject distance.  


## Calculating depth of field

To estimate the depth of file for a particular lens setup, use the calculator below.

<simple-dof-calculator />