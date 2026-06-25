/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // Pointer to the last valid element in nums1
    let p1 = m - 1;

    // Pointer to the last element in nums2
    let p2 = n - 1;

    // Position where the next largest element should be written
    let write = m + n - 1;

    // Continue until all elements from nums2 are placed
    while (p2 >= 0) {

        // If nums1 still has elements left
        // and its current element is larger than nums2's current element
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {

            // Place nums1's larger element at the write position
            nums1[write] = nums1[p1];

            // Move nums1 pointer left
            p1--;

        } else {

            // Otherwise place nums2's element
            nums1[write] = nums2[p2];

            // Move nums2 pointer left
            p2--;
        }

        // Move write position left
        write--;
    }
}